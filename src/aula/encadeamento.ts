type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O text',
  data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Ixi, não existe data.');
console.log(undefined ?? '2-Ixi, não existe data.');
console.log(null ?? '2-Ixi, não existe data.');


