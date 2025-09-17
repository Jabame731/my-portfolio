import Button from '@/components/atoms/Button/Button';
import { ButtonColors, ButtonStyles, ButtonTypes } from '@/models/Button.model';

const CtxButtons = () => {
  return (
    <>
      <Button
        href={'#projects'}
        type={ButtonTypes.button}
        color={ButtonColors.primary}
        design={ButtonStyles.solid}
      >
        Projects
      </Button>
      <Button
        href="/resume/Justine_Taglucop-resume.pdf"
        type={ButtonTypes.button}
        download="Justine Taglucop Resume"
        design={ButtonStyles.outline}
      >
        My Resume
      </Button>
    </>
  );
};

export default CtxButtons;
