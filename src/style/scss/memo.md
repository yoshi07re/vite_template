# mixinの使い方


## media query

```scss:style.scss
@include f.mq--max(md) {
  .demo {
    fotn-size: 12px;
  }
}
```

or

```scss:style.scss
.demo {
  font-size: 18px;

  @include f.mq--max(md) {
    font-size: 12px;
  }
}
```

### コンパイル後
```css:style.css
.demo {
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .demo {
    font-size: 12px;
  }
}
```

## column

```scss:style.scss
@include f.mq--max(md) {
  .demo {
    @include f.column(24px, 30px);
  }
}
```