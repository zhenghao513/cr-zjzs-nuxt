import { queryDocument } from '~/api/document';
import type { DocumentRes } from '~/api/document';

export interface DocumentData {
  result: Ref<DocumentRes>;
  error: Ref<unknown>;
}
export interface AnnounceData {
  title: string;
  content: string;
}

export default function useGetDocument(bindType: number) {
  const announce = reactive<AnnounceData>({
    title: '',
    content: '',
  });
  const getDocument = async () => {
    const data: DocumentData = await queryDocument(bindType);
    announce.title = data.result.value.obj.title;
    announce.content = data.result.value.obj.content;
  };

  return { announce, getDocument };
}
