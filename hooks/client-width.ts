export default function useClientWidth() {
  const clientWidth = ref(0);
  const isDesktop = () => {
    clientWidth.value = document.body.clientWidth;
  };

  onMounted(() => window.addEventListener('resize', isDesktop));

  return { clientWidth, isDesktop };
}
