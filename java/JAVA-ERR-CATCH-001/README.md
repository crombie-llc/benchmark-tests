# Test Case JAVA-ERR-CATCH-001

**Language:** java

## Description

undefined

## Expected Findings

This test case is designed to detect the following issues:

1. **code_smell** (high, CWE-Unknown)
   - Empty catch block silently swallowing generic Exception. This hides errors and makes debugging extremely difficult.

## Ground Truth

The complete ground truth for this test case is stored in `.eagle/ground-truth/JAVA-ERR-CATCH-001.json`.

---

*This test case is part of the Eagle AI benchmark suite (Golden Suite v3.1.0)*
