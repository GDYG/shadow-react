#!/usr/bin/env bash

export $(xargs < env/.prod.env)

echo "Starting production server..."
echo "ENVIRONMENT: $ENVIRONMENT"

cross-env \
  ENVIRONMENT=$ENVIRONMENT \
  webpack \
  --mode production \
  --config config/webpack.production.js \