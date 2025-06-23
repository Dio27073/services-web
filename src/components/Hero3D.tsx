"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Wireframe, Points, PointMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireframeRef = useRef<THREE.LineSegments>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = state.clock.elapsedTime * 0.15
      wireframeRef.current.rotation.y = state.clock.elapsedTime * 0.25
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Main solid geometry */}
        <mesh ref={meshRef}>
          <dodecahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} transparent opacity={0.8} />
        </mesh>
        {/* Wireframe overlay */}
        <mesh ref={wireframeRef}>
          <dodecahedronGeometry args={[2.1, 0]} />
          <Wireframe fill="#60a5fa" stroke="#1d4ed8" thickness={0.02} transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })
  
  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#60a5fa" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <FloatingGeometry />
      <ParticleField />
      <Environment preset="studio" />
    </>
  )
}

export default function Hero3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }} gl={{ antialias: true, alpha: true }}>
      <Scene />
    </Canvas>
  )
}