# Binary Search Templates (Cheat Sheet)

This is a systematic set of **4 binary search templates** you can reuse without guessing loop conditions (`<=` vs `<`) or boundaries (inclusive vs half-open).

---

## Template A: Find exact target (closed interval)

### When to use
- You want **true/false**: “Does `target` exist?”

### Table
| Item | Rule |
|---|---|
| Search space | **[lo, hi]** (valid indices) |
| Invariant | target (if exists) stays in **[lo, hi]** |
| Loop | `while (lo <= hi)` |
| mid | `mid = floor((lo + hi) / 2)` |
| Move right | if `a[mid] < target` → `lo = mid + 1` |
| Move left | if `a[mid] > target` → `hi = mid - 1` |
| Found | if `a[mid] == target` |

### Visual (example: find 5 in `[1,3,5,7]`)
Start: `lo=0, hi=3`

```
idx:  0 1 2 3
a:    1 3 5 7
      L     H
```

mid=1 (3<5) → `lo=2`

```
idx:  0 1 2 3
      x x L H
```

mid=2 (5==5) → found ✅

---

## Template B: Lower bound (first index `>= x`) — half-open interval

### When to use
- “Where would I insert `x`?”
- “First index that is **not less** than `x`”

### Table
| Item | Rule |
|---|---|
| Search space | **[lo, hi)** (note: `hi` can be `n`) |
| Invariant | answer stays in **[lo, hi)** |
| Loop | `while (lo < hi)` |
| mid | `mid = floor((lo + hi) / 2)` |
| Go right | if `a[mid] < x` → `lo = mid + 1` |
| Go left | else → `hi = mid` |
| Return | `lo` (may be `n`) |

### Visual (example: lower_bound(6) in `[1,3,5,7]` → index 3)
Start: `lo=0, hi=4`

```
idx:  0 1 2 3 | 4
a:    1 3 5 7 |
      L       H     (answer in [L, H))
```

mid=2 (5<6) → `lo=3`

```
idx:  0 1 2 3 | 4
      x x x L | H
```

mid=3 (7>=6) → `hi=3`

```
idx:  0 1 2 3 | 4
            LH|
```

Stop (`lo==hi==3`) → return 3 ✅

---

## Template C: Upper bound (first index `> x`) — half-open interval

### When to use
- “First element **strictly greater** than `x`”

### Table
| Item | Rule |
|---|---|
| Search space | **[lo, hi)** |
| Invariant | answer stays in **[lo, hi)** |
| Loop | `while (lo < hi)` |
| mid | `mid = floor((lo + hi) / 2)` |
| Go right | if `a[mid] <= x` → `lo = mid + 1` |
| Go left | else → `hi = mid` |
| Return | `lo` |

### Visual (example: upper_bound(5) in `[1,3,5,7]` → index 3)
Start: `lo=0, hi=4`

```
idx:  0 1 2 3 | 4
a:    1 3 5 7 |
      L       H
```

mid=2 (5<=5) → `lo=3`

```
idx:  0 1 2 3 | 4
      x x x L | H
```

mid=3 (7>5) → `hi=3`

```
idx:  0 1 2 3 | 4
            LH|
```

Stop → return 3 ✅

---

## Template D: Last True (find last index where predicate is True)

### When to use
- You have a **monotonic predicate** like `T T T F F ...`
- Want the **last** index where it is True  
  Example: “last row whose first element `<= target`” (used in LeetCode #74 row selection)

### Table
| Item | Rule |
|---|---|
| Search space | **[lo, hi]** (valid indices) |
| Invariant | answer stays in **[lo, hi]** |
| Loop | `while (lo < hi)` |
| mid | `mid = floor((lo + hi + 1) / 2)` (**upper mid**) |
| If True | `lo = mid` |
| If False | `hi = mid - 1` |
| Return | `lo` |

### Visual (example: last index where `a[i] <= 6` in `[1,3,5,7]`)
Truth pattern: `T T T F` → answer is index 2.

Start: `lo=0, hi=3`

```
idx:  0 1 2 3
a:    1 3 5 7
P:    T T T F
      L     H
```

mid = floor((0+3+1)/2)=2 → True → `lo=2`

```
idx:  0 1 2 3
      x x L H
```

mid = floor((2+3+1)/2)=3 → False → `hi=2`

```
idx:  0 1 2 3
          LH x
```

Stop → return 2 ✅

---

# Quick mapping (which template to pick)

| What you want | Template |
|---|---|
| “Does target exist?” | **A** |
| “First index where `>= x`” | **B** (lower_bound) |
| “First index where `> x`” | **C** (upper_bound) |
| “Last index where predicate is True” / “largest `<= x`” | **D** (last true) |

---

# Anti-confusion rules (memorize these)

1) If your loop is `while (lo <= hi)`, you are in **closed interval mode**  
   → you must shrink with `hi = mid - 1` / `lo = mid + 1`.

2) If your loop is `while (lo < hi)`, you are in **range shrinking mode**  
   → you must keep the answer inside the range using `hi = mid` or `lo = mid + 1` consistently.

3) When you use `lo = mid` (Template D), you must use **upper mid**  
   → `mid = floor((lo + hi + 1) / 2)` to avoid infinite loops.
