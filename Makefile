.PHONY: all build

build:
	npm run build

deploy: build
	aws s3 sync ./build s3://electrony.space --delete --profile alican
	aws cloudfront create-invalidation --distribution-id E2S49UKD6MU0ZS --paths "/*" --profile alican
	aws cloudfront create-invalidation --distribution-id E2S49UKD6MU0ZS --paths "/" --profile alican
