import { type FeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlags } from "./setGetFeatures";

interface ToggleFeaturesParams<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>({
  name,
  on,
  off,
}: ToggleFeaturesParams<T>): T {
  if (getFeatureFlags(name)) {
    return on();
  }
  return off();
}
