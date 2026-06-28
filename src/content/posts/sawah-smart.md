---
title: "SawahSmart — IoT + ML Rice Maturity Classifier"
author: Ezra Satria Bagas Airlangga
pubDatetime: 2026-06-22T00:00:00Z
featured: true
draft: false
tags:
  - projects
  - iot
  - machine-learning
  - computer-vision
  - thesis
description: End-to-end sistem monitoring padi — ESP32-CAM capture, 2-tier VLM gatekeeper + Hybrid CNN+VI classifier, Cloud Run inference, Firebase realtime, PWA dashboard.
---

<img src="/sawah1.png" alt="SawahSmart dashboard" loading="lazy" />

## Problem

Penentuan waktu panen padi manual butuh ahli agronomi di lapangan. Otomasi via vision + IoT untuk mendekatkan ke petani.

## Stack

- **Hardware**: ESP32-CAM (Arduino/PlatformIO)
- **ML/DL**: scikit-learn (SVM + 7 vegetation index), TensorFlow/Keras (EfficientNet, Hybrid CNN+VI)
- **VLM**: Gemini 2.5 (Flash-Lite/Flash/Pro), GPT-4o / GPT-4o-mini
- **Backend**: Python Flask di Google Cloud Run
- **Storage**: Google Cloud Storage + Firebase Realtime Database
- **Frontend**: HTML/CSS/JS PWA

## Arsitektur (2-tier)

1. **VLM gatekeeper** (Gemini 2.5 Flash-Lite) — filter open-world, reject gambar non-padi sebelum klasifikasi
2. **Hybrid classifier** (CNN features + ExGR vegetation index) — klasifikasi 3 kelas: Vegetative / Generative / Mature

## Hasil

Studi komparatif VLM vs ML vs DL vs Hybrid, 3-class, test n=104.

- **Hybrid+ExGR** (deployed): test F1 = **0.966**, mature F1 = 0.955
- **Hybrid+NGRDI**: CV F1 = **0.977** (terbaik cross-validation)
- EfficientNetB0 (DL): test F1 = 0.953
- ExGR + SVM-RBF (ML): test F1 = 0.958
- Gemini Flash-Lite (VLM gatekeeper): test F1 = 0.956, **mature recall = 1.0**
- Dataset 519 raw → 1140 augmented (Roboflow); 1036 CV + 104 test

<img src="/sawah2.png" alt="Bench setup ESP32-CAM" loading="lazy" />

<img src="/bench.jpeg" alt="Benchmark comparison" loading="lazy" />

## Konteks

Tesis S2 Teknik Elektro Telkom University. Kontribusi: pipeline 2-tier yang menggabungkan keamanan open-world VLM dengan akurasi Hybrid CNN+VI pada hardware edge berbiaya rendah.

## Links

- [Repository](https://github.com/papapipopepo/sawah-smart)
