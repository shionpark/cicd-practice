## CI/CD 연습 가이드

- `main` 브랜치 기준으로 push·PR 시 GitHub Actions 워크플로우(.github/workflows/ci.yml)가 동작합니다.
- Node 20 + pnpm 9 환경에서 `pnpm install --frozen-lockfile` → `pnpm lint` → `pnpm build` 순서로 검증합니다.
- 로컬에서도 `pnpm lint`와 `pnpm build`를 실행해 동일한 검사를 미리 확인할 수 있습니다.
