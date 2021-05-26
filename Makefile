buildpy: buildweb
	poetry install
	poetry build
	
buildweb:
	cd web && \
	. envs/.env.oss && \
	yarn && \
	yarn build && \
	tar -cvzf ../src/human_lambdas/frontend.tgz ./build