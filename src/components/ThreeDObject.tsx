import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDObject: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create sphere geometry to resemble a planet
    const geometry = new THREE.SphereGeometry(2, 32, 32);

    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earth6.webp');

    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
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

    // Add neon lights
    const neonBlueLight = new THREE.PointLight(0x00ffff, 1.5, 50);
    neonBlueLight.position.set(5, 10, 10);
    scene.add(neonBlueLight);

    const purpleLight = new THREE.PointLight(0x9900ff, 1, 100);
    purpleLight.position.set(-10, 5, 15);
    scene.add(purpleLight);

    // Create stars background
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const starVertices = [];
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

// Modificación en la creación de las estrellas
const starMaterial = new THREE.PointsMaterial({ 
  color: 0xffffff, 
  size: 1, // Aumenta el tamaño de las estrellas
  transparent: true,
  opacity: 0.8, // Añade un poco de opacidad para un efecto brillante
  blending: THREE.AdditiveBlending // Usa blending aditivo para un efecto de brillo
});    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      earth.rotation.y += 0.001; // Rotación lenta como la de un planeta
      stars.rotation.y += 0.0005; // Movimiento sutil de las estrellas para dar un efecto realista

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
