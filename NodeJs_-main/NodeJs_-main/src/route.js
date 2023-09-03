export default (app) => {
    app.get('/', function(req, resp) {
        resp.send(
        `
        <head>
            <meta charset="utf-8">
        </head>
            <body>
                <h1> Ultima School </h1>
            </body> 
        </html>
        `);
    });

    app.get('/alunos', function(req, resp) {
        resp.send(`

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Última School</title>
        </head>
        <body>
            <h1>Listagem de alunos</h1>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Matrícula</td>
                        <td>Nome do Aluno</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>0123</td>
                        <td>João Rodrigo Brandão</td>
                    </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>2</td>
                    <td>0321</td>
                    <td>Maria Silva</td>
                </tr>
            </tbody>
            </table>
            
        </body>
        </html>
            `);
     });

     app.get('/professores', function(req, resp) {
        resp.send(`

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Última School</title>
        </head>
        <body>
            <h1>Listagem de professores Cadastrados</h1>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Matrícula</td>
                        <td>Nome do Professor</td>
                        <td>Curso</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>0123</td>
                        <td>José Brandão</td>
                        <td>Javascript</td>
                    </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>2</td>
                    <td>0321</td>
                    <td>Joana Oliveira</td>
                    <td>Java e Programação Orientada a Objeto</td>
                </tr>
            </tbody>
            </table>
            
        </body>
        </html>
            `);
     });

}
