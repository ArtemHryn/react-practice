import DeleteIcon from '@mui/icons-material/Delete';
import {
  FormItemLayout,
  Input,
  StyledButton,
} from './TranslateFormItem.styled';

export const TranslateFormItem = ({ index, register, remove }) => {
  return (
    <FormItemLayout>
      <Input
        id="outlined-basic"
        label="English word"
        variant="outlined"
        {...register(`words.${index}.engWord`)}
      />
      <Input
        id="outlined-basic"
        label="Ukrainian word"
        variant="outlined"
        {...register(`words.${index}.ukrWord`)}
      />
      <StyledButton variant="outlined" startIcon={<DeleteIcon />} onClick={() => remove(index)}>
        Delete
      </StyledButton>
    </FormItemLayout>
  );
};
