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
description: End-to-end sistem monitoring padi — ESP32-CAM capture, SVM+ExGR classify kematangan, Cloud Run inference, Firebase realtime, PWA dashboard.
---

## Problem

Penentuan waktu panen padi manual butuh ahli agronomi di lapangan. Otomasi via vision + IoT untuk mendekatkan ke petani.

## Stack

- **Hardware**: ESP32-CAM (Arduino/PlatformIO)
- **ML**: SVM + ExGR vegetation index, Hybrid VLM+ML 2-tier
- **Backend**: Python Flask di Google Cloud Run
- **Storage**: Google Cloud Storage
- **Realtime**: Firebase Realtime Database
- **Frontend**: HTML/CSS/JS PWA (Netlify)
- **ML UI**: Streamlit

## Hasil

- Hybrid+ExGR test F1 = **0.966** (n=104, 3-class)
- Studi komparatif: VLM vs ML vs DL vs Hybrid
- Dataset 519 raw → 1140 augmented (Roboflow pipeline)
- 2-tier arsitektur: VLM gatekeeper (Gemini Flash-Lite) → ML classifier

## Konteks

S2 thesis — Teknik Elektro Telkom University, jurusan Regulation & Management Telecommunication. Angle: data governance + telco regulation untuk smart agriculture.

## Links

- [Repository](https://github.com/papapipopepo/sawah-smart)
