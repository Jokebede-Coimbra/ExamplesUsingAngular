# Forms

O formulário reativo no Angular refere-se a uma abordagem para lidar com formulários em que o estado e o comportamento do formulário são gerenciados programaticamente no código TypeScript, em vez de depender exclusivamente do modelo no HTML.

## FormGroup

Um FormGroup é uma coleção de controles (campos do formulário) organizados hierarquicamente. Cada controle é representado por um FormControl.
O FormGroup é criado no código TypeScript e usado para rastrear o estado e as alterações do formulário.

## FormControl

Um FormControl representa um único campo de entrada em um formulário, como um campo de texto, caixa de seleção ou botão de opção.
Ele é responsável por rastrear o valor atual, o status de validação e os eventos de alteração do campo.

## Reatividade

A abordagem reativa envolve a observação de mudanças nos controles do formulário e a reação a essas mudanças.
Isso é alcançado usando o padrão Observador (Observables) do RxJS, uma biblioteca de programação reativa.

## Validators (Validadores)

Você pode aplicar validadores aos controles para impor regras específicas, como comprimento mínimo, máximo, etc.
Angular fornece alguns validadores padrão e você também pode criar seus próprios validadores personalizados.

## ngForm e ngModel

Enquanto o formulário reativo é uma abordagem baseada em código, o Angular também suporta a abordagem baseada em modelo com ngForm e ngModel.
ngForm é uma diretiva que permite a criação de formulários baseados em modelo, enquanto ngModel é usado para ligar os dados do formulário ao modelo.
