import { onBeforeUnmount, onMounted } from 'vue';

export default function useEffect(effect: () => VoidFunction | void) {
  let dispose: VoidFunction | void;

  onMounted(() => {
    dispose = Reflect.apply(effect, undefined, []);
  });

  onBeforeUnmount(() => {
    if (dispose) {
      Reflect.apply(dispose, undefined, []);
    }
  });
}
