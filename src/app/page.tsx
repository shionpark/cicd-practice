const steps = [
  'github 리포지토리에 push 또는 PR 생성',
  'GitHub Actions에서 lint · build 통과 여부 확인',
  '필요 시 테스트/배포 작업을 추가해 파이프라인 확장',
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <h1>Preview 테스트</h1>
      <section className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#555]">
          CI/CD Practice
        </p>
        <h1 className="text-4xl font-bold leading-tight text-[#111] sm:text-5xl">
          Next.js + GitHub Actions로
          <br />
          간단한 CI 흐름 연습하기
        </h1>
        <p className="max-w-2xl text-lg text-[#444]">
          메인 브랜치 기준으로 lint와 build를 자동으로 돌려보며 파이프라인을
          익혀보세요. 필요하다면 테스트, 배포 단계를 추가해 손쉽게 확장할 수
          있습니다.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-[#111] px-4 py-2 font-medium text-white">
            pnpm lint
          </span>
          <span className="rounded-full bg-white px-4 py-2 font-medium text-[#111] shadow-sm">
            pnpm build
          </span>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#111]">워크플로우 개요</h2>
          <p className="mt-2 text-sm text-[#444]">
            `.github/workflows/ci.yml`에서 Node 20, pnpm 9 환경을 사용해 의존성
            설치 → lint → build 순으로 확인합니다.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#111]">
            {steps.map((step) => (
              <li key={step} className="flex items-start gap-2">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-[#111]" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#111]">로컬에서 확인</h2>
          <p className="mt-2 text-sm text-[#444]">
            CI와 동일하게 실행해보면서 실패 지점을 빠르게 잡을 수 있습니다.
          </p>
          <div className="mt-4 space-y-3 text-sm text-[#111]">
            <div className="rounded-xl bg-[#f3f3f3] p-3 font-mono text-xs">
              pnpm lint
            </div>
            <div className="rounded-xl bg-[#f3f3f3] p-3 font-mono text-xs">
              pnpm build
            </div>
            <p className="text-[#444]">
              문제가 생기면 에러 로그를 기반으로 수정 후 재실행하세요.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
