# Test Case PY-SEC-SQLI-001

**Language:** python

## Description

undefined

## Expected Findings

This test case is designed to detect the following issues:

1. **security** (critical, CWE-89)
   - SQL Injection vulnerability detected. User input is directly concatenated into the query string using f-string interpolation.

## Ground Truth

The complete ground truth for this test case is stored in `.eagle/ground-truth/PY-SEC-SQLI-001.json`.

---

*This test case is part of the Eagle AI benchmark suite (Golden Suite v3.1.0)*
