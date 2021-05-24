pkg:
	cd web && \
	. envs/.env.oss && \
	yarn && \
	yarn build && \
	tar -cvzf ../src/human_lambdas/frontend.zip ./build
