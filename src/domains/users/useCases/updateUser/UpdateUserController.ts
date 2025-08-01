import { IncomingMessage, ServerResponse } from 'http';
import { parseBody } from '../../../../shared/utils/parseBody';
import { handleHttpError } from '../../../../shared/http/handleHttpError';
import { IUpdateUserRequestDTO } from './UpdateUserDTO';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(
    request: IncomingMessage & { params?: { id: string } },
    response: ServerResponse,
  ): Promise<void> {
    try {
      const rawBody = await parseBody(request);
      const id = request.params?.id;

      const body = rawBody as IUpdateUserRequestDTO;

      await this.updateUserUseCase.execute({ id }, body);

      response
        .writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify({ message: 'User updated successfully' }));
    } catch (error) {
      handleHttpError(error, response);
    }
  }
}

export { UpdateUserController };
