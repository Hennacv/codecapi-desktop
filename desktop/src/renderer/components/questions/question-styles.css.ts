import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const NewQuestionContainer = style({
  width: vars.width.full,
  height: vars.height.page,
  padding: vars.spacing['3x'],
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3x'],
});

export const NewQuestionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1.25x'],
})

export const NewQuestionSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3x'],
})

export const NewQuestionTitle = style({
  fontSize: vars.fontSize.extraLarge,
  fontWeight: vars.fontWeight.medium
})

export const NewQuestionDescription = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300']
})

export const NewQuestionFormItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.spacing['1.25x'],
});

export const NewQuestionLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x']
});

export const NewQuestionInputBase = style({
  padding: vars.spacing['1x'],
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.medium,
  fontWeight: vars.fontWeight.regular,
})

export const NewQuestionInput = styleVariants({
  default: [NewQuestionInputBase, {
    border: '2px solid ' + vars.color['dark-300'],
  }],
  validated: [NewQuestionInputBase, {
    border: '2px solid ' + vars.color['primary-400'],
  }]

});

export const NewQuestionTextareaBase = style({
  padding: vars.spacing['1x'],
  backgroundColor: vars.color['dark-200'],

  borderRadius: vars.borderRadius.medium,
  fontWeight: vars.fontWeight.regular,
  resize: 'vertical',
});

export const NewQuestionTextarea = styleVariants({
  default: [NewQuestionTextareaBase, {
    border: '2px solid ' + vars.color['dark-300'],
  }],
  validated: [NewQuestionTextareaBase, {
    border: '2px solid ' + vars.color['primary-400'],
  }]
})

export const NewQuestionParagraph = style({
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.light,
  color: vars.color['text-white-300'],
});

export const NewQuestionTagList = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  gap: vars.spacing['1x'],
  backgroundColor: 'transparent',
});

export const NewQuestionSubmit = style({
  width: vars.width.fit,
  padding: vars.spacing['1x'] + vars.spacing['2x'],
  backgroundColor: vars.color['dark-300'],
  border: '2px solid ' + vars.color['dark-400'],
  borderRadius: vars.borderRadius.medium,
  fontSize: vars.fontSize.base,
  cursor: 'pointer',
  transition: vars.transition.defaultHover,
  ':hover': {
    backgroundColor: vars.color['dark-400'],
    transition: vars.transition.defaultHover,
  },
  ':disabled': {
    backgroundColor: vars.color['dark-200'],
    color: vars.color['text-white-300'],
    border: '2px solid ' + vars.color['dark-300'],
    cursor: 'not-allowed'
  }
});

export const NewQuestionTagContainer = style({
  padding: vars.spacing['1x'],
  backgroundColor: vars.color['dark-200'],
  border: '2px solid ' + vars.color['dark-300'],
  borderRadius: vars.borderRadius.medium,
  minHeight: '4.5rem'
});
