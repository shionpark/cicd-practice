'use client';

export default function Home() {
  return (
    <div>
      <button
        onClick={async () => {
          await fetch(
            'https://discord.com/api/webhooks/1440948724884049921/R8s-awezD9T6706DERjlmIzl0zcPKx-1Vstl2Xq6YppZUwBY7qMamro9fMjqWEk4N-Fb',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                content: 'Discord 알림 테스트',
                username: 'Alert Bot',
                embeds: [
                  {
                    title: '알림 제목',
                    description: '알림 설명',
                    fields: [
                      {
                        name: '알림 필드 이름',
                        value: '알림 필드 값',
                        inline: true,
                      },
                      {
                        name: '알림 필드 이름',
                        value: '알림 필드 값',
                        inline: true,
                      },
                    ],
                    color: 255,
                  },
                ],
              }),
            }
          );
        }}
        className="rounded-md bg-blue-500 p-2 text-white"
      >
        discord로 알림보내기
      </button>
    </div>
  );
}
