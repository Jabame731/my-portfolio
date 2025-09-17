import Button from '@/components/atoms/Button/Button';
import { ButtonColors, ButtonStyles, ButtonTypes } from '@/models/Button.model';

type ProjectButtonsInterface = {
  demo?: string;
  github?: string;
};

const ProjectButtons = ({ demo, github }: ProjectButtonsInterface) => {
  return (
    <>
      {demo && (
        <Button
          href={demo}
          type={ButtonTypes.button}
          color={ButtonColors.primary}
          design={ButtonStyles.solid}
        >
          Live Demo
        </Button>
      )}

      {github && (
        <Button
          href={github}
          type={ButtonTypes.button}
          design={ButtonStyles.outline}
        >
          GitHub
        </Button>
      )}
    </>
  );
};

export default ProjectButtons;
