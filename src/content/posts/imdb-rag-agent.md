---
title: "IMDB RAG Agent — Multi-Agent Movie Chatbot"
author: Ezra Satria Bagas Airlangga
pubDatetime: 2026-01-29T00:00:00Z
featured: false
draft: false
tags:
  - projects
  - llm
  - rag
  - langgraph
  - multi-agent
description: Supervisor-based multi-agent RAG chatbot untuk query natural language atas IMDB Top 1000 — grounded answers, source attribution, cost transparency.
---

<img src="/imdb.png" alt="IMDB RAG Agent UI" loading="lazy" />

## Problem

LLM hallucinate detail film. Butuh grounded response dengan source attribution dan transparansi cost.

## Stack

- **Framework**: LangChain + LangGraph
- **LLM**: OpenAI API
- **Vector DB**: Qdrant Cloud (1000 movie documents, no chunking)
- **Observability**: Langfuse
- **UI**: Streamlit
- **Deps**: Poetry

## Hasil

- Supervisor route query ke specialized agents
- Source attribution per response
- Token usage + cost estimation transparan
- Chat history rolling 3 turns

## Links

- [Repository](https://github.com/papapipopepo/imdb-rag-agent)
