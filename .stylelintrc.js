module.exports = {
  extends: ['stylelint-prettier/recommended', 'stylelint-config-recommended-vue/scss', 'stylelint-config-recommended-scss'],
  customSyntax: 'postcss-html',
  plugins: ['stylelint-scss', 'stylelint-prettier', 'stylelint-order'],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'string-no-newline': null,
    'no-descending-specificity': null,
    'scss/at-import-partial-extension': null,
    'no-empty-source': null,
    'order/properties-order': [
      'position', // Позиционирование
      'top',
      'bottom',
      'left',
      'right',
      'z-index',
      'display', // Блочная модель
      'align-items',
      'margin',
      'padding',
      'width',
      'max-width',
      'height',
      'max-height',
      'border-radius', //Оформление
      'border',
      'border-color',
      'background',
      'background-color',
      'opacity',
      'overflow',
      'font-family', // Типографика
      'font-style',
      'font-weight',
      'font-size',
      'line-height',
      'text-decoration',
      'color',
      'transform', // Анимации
      'animation',
    ]
  },
};
