# Test Case CS-ASYNC-VOID-001

**Language:** csharp

## Description

undefined

## Expected Findings

This test case is designed to detect the following issues:

1. **bug** (high, CWE-Unknown)
   - Avoid 'async void' methods. Use 'async Task' to allow proper exception handling and awaiting.

## Ground Truth

The complete ground truth for this test case is stored in `.eagle/ground-truth/CS-ASYNC-VOID-001.json`.

---

*This test case is part of the Eagle AI benchmark suite (Golden Suite v3.1.0)*
