---
title: "Olist AI Assistant — E-Commerce Intelligence Platform"
author: Ezra Satria Bagas Airlangga
pubDatetime: 2026-04-20T00:00:00Z
featured: true
draft: false
tags:
  - projects
  - llm
  - rag
  - multi-agent
  - fastapi
  - gcp
description: Multi-agent RAG platform untuk query natural language atas data e-commerce Olist Brazil — semantic search, SQL, dan vision search dalam satu chat.
---

## Problem

Stakeholder e-commerce butuh insight cepat tanpa nulis SQL atau buka banyak dashboard. Solusi: chat-based assistant yang otomatis pilih agent paling relevan.

## Stack

- **LLM**: OpenAI GPT-4o-mini + text-embedding-3-small
- **Vector DB**: Qdrant Cloud
- **SQL**: SQLite
- **Backend**: FastAPI + Uvicorn (deployed di Cloud Run)
- **Frontend**: Streamlit + Plotly
- **Infra**: Docker, GCP Cloud Build
- **Observability**: Langfuse

## Hasil

- Multi-agent orchestration: supervisor route ke semantic / SQL / vision agent
- Image-based product search via vision AI
- Recommendation engine: rating + sentiment fusion
- Analytics dashboard: revenue, sellers, logistics

## Links

- [Live demo (Streamlit)](https://olist-ai-e-commerce-assistance-huaayxkcxxf8fzqgtqming.streamlit.app/)
- [API docs (FastAPI)](https://olist-api-h57doqcaba-as.a.run.app/docs)
- [Repository](https://github.com/papapipopepo/Olist-AI-E-Commerce-Assistance)
