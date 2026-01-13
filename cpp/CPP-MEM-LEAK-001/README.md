# Test Case CPP-MEM-LEAK-001

**Language:** cpp

## Description

undefined

## Expected Findings

This test case is designed to detect the following issues:

1. **code_smell** (critical, CWE-401)
   - Memory leak detected. 'tex' is allocated but not deleted before returning nullptr.

## Ground Truth

The complete ground truth for this test case is stored in `.eagle/ground-truth/CPP-MEM-LEAK-001.json`.

---

*This test case is part of the Eagle AI benchmark suite (Golden Suite v3.1.0)*
