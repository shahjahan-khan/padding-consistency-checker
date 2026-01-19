# Number Padding Consistency Validator

A TypeScript utility that inspects a collection of numeric strings and determines whether they use **consistent zero-padding**, are **consistently unpadded**, or are **invalid / inconsistent**.

This utility is useful for validating identifiers, counters, filenames, or any data where numeric string formatting consistency matters.

---

## Problem Statement

You are given an `Iterable<string>` where each string represents a non-negative integer.

Each string may:
- Be left-padded with one or more `'0'` characters, or
- Be unpadded

Your task is to analyze the input and determine:

1. Whether zero-padding is used  
2. Whether the padding (if present) is consistent  
3. Whether the input is valid or invalid  
4. What padding length or minimum length can be inferred  

The result must be returned as **a single number** following strict rules.

---

## Function Signature

```ts
export function checkNumberPadding(intStrs: Iterable<string>): number
```

---

## Return Value Scenarios

### `> 1` — Consistent Zero Padding
Returned when:
- At least one value is zero-padded
- All padded values have the same total string length
- No unpadded value is shorter than the padded length

Example:
```ts
["001", "002", "010"] → 3
```

---

### `1` — Unpadded Single-Digit Values
Returned when all values are unpadded and the minimum length is `1`.

Example:
```ts
["1", "2", "3"] → 1
```

---

### `< 0` — Unpadded Multi-Digit Values
Returned when no padding is used.  
Absolute value represents the minimum string length.

Example:
```ts
["99", "999", "9999"] → -2
```

---

### `-1` — Invalid or Inconsistent Formatting
Returned when:
- Padded values have different lengths
- Padded and shorter unpadded values are mixed

Examples:
```ts
["01", "002"] → -1
["001", "12"] → -1
```

---

### `0` — Empty Input

Example:
```ts
[] → 0
```

---

## Padding Detection Rules

A value is considered padded only if:
- It starts with `'0'`
- Length is greater than `1`

---

## Validation Rules

- All padded values must have the same length
- Unpadded values must not be shorter than padded values
- Validation is string-based only
- No mutation or side effects

---


## Testing the code

- Navigate to [API-Doc](https://padding-consistency-checker.onrender.com/app-docs/)
- Backend code is deployed on render which can take few minutes to render due to cold start
- Click on `Try it out` option 
- Update the request body and hit `Execute`
- Response structure: `{"result": 3}`

---