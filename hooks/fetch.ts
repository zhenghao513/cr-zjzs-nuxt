import { MajorInfoListArgs } from '~/api/plan';

export async function useFetch(
  url: RequestInfo | URL,
  data: {
    args: MajorInfoListArgs | { bindType: number } | {};
    token: string;
    deviceInfo: string;
    channel: string;
  },
) {
  const result = ref();
  const error = ref();

  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    const json = await response.json();
    result.value = json;
  } catch (e) {
    console.error(`出现错误：${e}`);
    error.value = e as unknown as null;
  }

  return { result, error };
}
