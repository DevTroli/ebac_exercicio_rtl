import { render, fireEvent, screen } from '@testing-library/react';

import Post from '.';

test('Deve renderizar o componente Post com dois comentários', () => {
    render(<Post imageUrl="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Ilustra%C3%A7%C3%A3o-Batmobile-Batman-PNG.png" children={undefined} />);
    
    const input = screen.getByTestId('input-comentario'); 
    const button = screen.getByTestId('botao-adicionar');

    fireEvent.change(input, { target: { value: 'Muito Legal esse Batmovel' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Não gostei desse Batmovel, prefiro mais o antigo' } });
    fireEvent.click(button);

    expect(screen.getByTestId('Comentario-1')).toHaveTextContent('Muito Legal esse Batmovel');
    expect(screen.getByTestId('Comentario-2')).toHaveTextContent('Não gostei desse Batmovel, prefiro mais o antigo');
});

