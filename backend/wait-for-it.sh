#!/bin/bash
set -e

host="$1"
port="$2"
shift 2
cmd="$@"

echo "Waiting for $host:$port..."

while ! timeout 1 bash -c "echo > /dev/tcp/$host/$port" 2>/dev/null; do
  echo "MySQL is unavailable - sleeping"
  sleep 1
done

echo "MySQL is up - executing command"
exec $cmd