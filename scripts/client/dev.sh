#!/usr/bin/env bash

export $(xargs < env/.dev.env)

echo "Starting development server..."
echo "ENVIRONMENT: $ENVIRONMENT"

cross-env \
  ENVIRONMENT=$ENVIRONMENT \
  PORT=$PORT \
  webpack serve \
  --mode development \
  --config config/webpack.development.js \