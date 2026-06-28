---
title: "Vehicle Detection & Traffic Density — YOLOv12"
author: Ezra Satria Bagas Airlangga
pubDatetime: 2026-02-27T00:00:00Z
featured: false
draft: false
tags:
  - projects
  - computer-vision
  - yolo
  - streamlit
description: Sistem deteksi kendaraan + klasifikasi tingkat kemacetan via YOLOv12, dengan dashboard analytics interaktif.
ogImage: "/yolo.png"
---

![YOLOv12 vehicle detection](/yolo.png)

## Problem

Monitoring lalu lintas manual lambat. Butuh deteksi real-time + klasifikasi density untuk smart traffic analysis.

## Stack

YOLOv12, Streamlit, Supervision, OpenCV, Pillow, Plotly, Python

## Hasil

- **mAP@50: 0.902**
- **mAP@50-95: 0.714**
- 3 kelas: Bus, Car, Van
- Density: LOW (≤3), MEDIUM (4-7), HIGH (>7)
- Mode: single image, video frame, batch, history tracking

## Links

- [Repository](https://github.com/papapipopepo/yolov12-vehicle-detection-system)
