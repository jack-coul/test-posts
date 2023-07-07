import { z } from 'zod';

export const schema = z.object({
  email: z.string().nonempty('Обязательоне поле').email(),
  name: z.string().min(5, 'Минимум 5 символов').max(255, 'Масксимум 255 символов'),
  body: z.string().min(1, 'Минимум 1 символ').max(400, 'Масксимум 400 символов'),
});
