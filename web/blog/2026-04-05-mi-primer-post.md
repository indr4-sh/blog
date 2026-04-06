---
title: "Volver a lo básico: cuando los puertos te mienten"
slug: puertos-ocupados
tags: [devops, troubleshooting]
---

---
Estuve cerca de dos horas intentando hacer funcionar una instancia de MinIO que corría en una VM.

MinIO exponía:
- `9000` → API / servicio
- `9001` → Web UI
Yo estaba entrando con un túnel SSH:

```bash
ssh -L 9001:localhost:9001 user@vm
````

Todo bien… pero cuando intentaba logear en la web UI:

> credenciales inválidas

---

## 🧠 Hipótesis iniciales

Como siempre, asumí lo más complejo primero:

* problema de credenciales
* error en la configuración de MinIO
* conflicto con la reinstalación
* bug raro

Así que hice lo que todos hacemos:

👉 desinstalar y volver a instalar todo

No sirvió para nada.

---
<!-- truncate -->

## 🙃 Habia un pequeño detalle...

En un momento, sin darme cuenta, ejecuté el túnel SSH dos veces.

Y ahí apareció algo gracioso:

👉 SSH no te alerta claramente cuando superponés puertos locales

Eso me hizo pensar...

---

## 🧪 Verificación

Decidí hacer algo básico (demasiado básico):

```bash
ss -tuln
```

Y ahi estaba, yo pensando "puertos que tienen olor":

👉 Los puertos ya estaban ocupados en mi máquina local

---

## 💥 Root cause

Tenía MinIO corriendo en **mi máquina local** y ni siquiera lo recordaba.

Entonces:

* el túnel SSH apuntaba correctamente a la VM
* pero el tráfico nunca salía de mi máquina
* estaba pegándole a MI MinIO local, no al remoto

Por eso:

> las credenciales “no funcionaban”

En realidad, estaba autenticando contra otra instancia.

---

## ✅ Solución

Simple:

```bash
sudo systemctl stop minio
sudo systemctl disable minio
```

Luego:

* cerrar túneles
* volver a levantar uno limpio

```bash
ssh -L 9001:localhost:9001 user@vm
```

Y todo funcionó perfectamente.

---

## 🧠 Lecciones aprendidas

* Nunca asumas que estás hablando con el servicio correcto
* Siempre verificá qué proceso está escuchando en un puerto local
* SSH no siempre te protege de errores de superposición de puertos
* Cuando algo no tiene sentido → probablemente estás mirando el lugar equivocado

---

## 🧩 Moral

A veces el problema es uno mismo.


---
