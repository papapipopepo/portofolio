---
title: "Bike Sharing Demand Prediction"
author: Ezra Satria Bagas Airlangga
pubDatetime: 2025-12-18T00:00:00Z
featured: false
draft: false
tags:
  - projects
  - machine-learning
  - regression
  - xgboost
description: Forecast hourly bike rental volume dari data cuaca + temporal — XGBoost tuned, R² 0.912.
---

<img src="/bike1.png" alt="Bike sharing EDA" loading="lazy" />

## Problem

Operasional bike-sharing butuh prediksi demand per jam untuk allocate armada secara efisien.

## Stack

Python 3.9+, scikit-learn, XGBoost, pandas, matplotlib, seaborn

## Hasil

- **RMSE: 65.36**
- **MAE: 43.00**
- **R²: 0.912**
- MAPE elevated (~62%) karena nilai aktual kecil di off-peak — MAE/RMSE lebih operasional

## Insight

- Temporal features dominan (hour-of-day, peak indicator)
- Error spike di commute hours (7-9 AM, 4-7 PM)
- Akurasi turun di winter + adverse weather

<img src="/bike2.png" alt="Feature importance / metric" loading="lazy" />

<img src="/bike3.png" alt="Actual vs predicted" loading="lazy" />

## Links

- [Repository](https://github.com/papapipopepo/Bike-Sharing-Demand-Prediction)
