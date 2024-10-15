import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDObject: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const neonBlueLight = new THREE.PointLight(0x00ffff, 1.5, 50);
    neonBlueLight.position.set(5, 10, 10);
    scene.add(neonBlueLight);
  
    const purpleLight = new THREE.PointLight(0x9900ff, 1, 100);
    purpleLight.position.set(-10, 5, 15);
    scene.add(purpleLight);  

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create sphere geometry to resemble a planet
    const geometry = new THREE.SphereGeometry(2, 32, 32);

    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/src/assets/earth.webp');

    const material = new THREE.MeshPhongMaterial({
      map: earthTexture, // Asigna la textura de la Tierra
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add point light to simulate sunlight
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      earth.rotation.y += 0.001; // Rotación lenta como la de un planeta

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeDObject;
