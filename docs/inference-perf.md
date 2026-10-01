# Inference perf

Specialized skill for LLM inference serving performance work. Not a
Day-1 default. Use when optimizing TTFT, TPOT, inter-token latency, KV
cache, batching, tensor or pipeline parallelism, quantization, or
GPU/TPU serving bottlenecks. The skill in `cursor-team-kit` names the
contract.

## Route

1. Separate prefill vs decode bottlenecks before changing parallelism.
2. Check tensor or pipeline parallelism against interconnect bandwidth
   before adding shards.
3. Size KV cache and batching from measured memory, not guesses.
4. Treat quantization as a quality and latency tradeoff with evidence.

## Fail closed

Shipping an inference change without a measured bottleneck claim is not
done. Recap is not evidence.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [harness-not-training.md](harness-not-training.md)
- [software-factory-gates.md](software-factory-gates.md)
- [one-shot-task.md](one-shot-task.md)
- plug-factory `cursor-team-kit/skills/inference-perf/SKILL.md`
