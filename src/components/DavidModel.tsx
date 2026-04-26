"use client";

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MODEL_URL = "/models/head_of_michelangelos_david_optimised.glb";

export default function DavidModel() {
  const { scene } = useGLTF(MODEL_URL);
  const rotationRef = useRef<THREE.Group>(null);
  const pivotRef = useRef<THREE.Group>(null);
  const initialized = useRef(false);
  const isVisible = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      isVisible.current = window.scrollY < window.innerHeight * 1.2;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((_, delta) => {
    if (!rotationRef.current || !pivotRef.current || !isVisible.current) return;

    if (!initialized.current) {
      pivotRef.current.updateWorldMatrix(true, true);
      const box = new THREE.Box3().setFromObject(pivotRef.current);
      if (!box.isEmpty()) {
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const s = 1.8 / maxDim;
        pivotRef.current.scale.setScalar(s);
        pivotRef.current.position.set(-center.x * s, -center.y * s, -center.z * s);
        initialized.current = true;
      }
    }

    // Slow continuous rotation
    rotationRef.current.rotation.y += delta * 0.2;

    // Subtle float
    rotationRef.current.position.y = Math.sin(Date.now() / 2200) * 0.04;
  });

  return (
    <group ref={rotationRef}>
      <group ref={pivotRef}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_URL);
