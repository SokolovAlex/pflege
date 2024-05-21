FROM bitnami/supabase-postgres:latest

WORKDIR /app
COPY . .
EXPOSE 3000