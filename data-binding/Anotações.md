# Data Binding

O Data Binding no Angular é como você mantém sua interface do usuário (o que os usuários veem) e seus dados (a parte invisível que controla o que está acontecendo nos bastidores) sincronizados. Ou seja, quando seus dados mudam, sua interface do usuário muda automaticamente, e vice-versa.

## Property Binding:
Property binding é usado para atualizar propriedades de elementos HTML com valores do componente.

- Exemplo de atualização de propriedade src de uma imagem:
> HTML 
`<img [src]="urlDaImagem" alt="Imagem" />`

- Exemplo typescript:
> TS
```  
export class SeuComponente {
  urlDaImagem = 'caminho/da/imagem.jpg';
}
```
- Exemplo de atualização de classe CSS com property binding:
> HTML
`<div [class.destaque]="destacarElemento">Este elemento pode ser destacado</div>`
> TS
```
export class SeuComponente {
  destacarElemento = true; // ou false para remover o destaque
}
````



## Interpolation:

A interpolação é usada para exibir dinamicamente valores de variáveis em um template.
> TS
```
export class SeuComponente {
  nome = 'Coimbra';
}
````
> HTML
`<p>Olá, meu nome é {{ nome }}</p>`


## Two-Way Binding (Ligação Bidirecional):
`Exemplo: [(ngModel)]="nome"`

Isso combina o one-way binding para exibir dados e a capacidade de atualizar dados no componente quando ocorre uma alteração na interface do usuário. Se o valor de nome muda no componente, a interface do usuário é atualizada; da mesma forma, se o usuário altera o valor na interface do usuário, o valor da variável nome no componente é atualizado automaticamente.

## Event Binding:
Event binding é usado para lidar com eventos, como cliques de botões, entradas de teclado, etc.

- Exemplo de clique de botão
> HTML 
` <button (click)="botaoClicado()">Clique Aqui</button>`

- Exemplo typescript:
> TS
```  
export class SeuComponente {
  botaoClicado() {
    console.log('Botão clicado!');
  }
}

```
- Exemplo de entrada de teclado
> HTML
```
<input (keyup)="teclaPressionada($event)" />
```
> TS
```
export class SeuComponente {
  teclaPressionada(event: any) {
    console.log('Tecla pressionada:', event.key);
  }
}
````

-----


