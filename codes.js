const CODES = [
 // AMI
 {b:"AMI",p:"s",m:"Falha no refresh da DRAM (memória)"},
 {b:"AMI",p:"ss",m:"Falha no circuito de paridade da memória"},
 {b:"AMI",p:"sss",m:"Falha nos primeiros 64 KB de RAM"},
 {b:"AMI",p:"ssss",m:"Falha no timer do sistema"},
 {b:"AMI",p:"sssss",m:"Falha no processador"},
 {b:"AMI",p:"ssssss",m:"Falha no controlador de teclado (Gate A20)"},
 {b:"AMI",p:"sssssss",m:"Erro de exceção em modo virtual (CPU)"},
 {b:"AMI",p:"ssssssss",m:"Falha de leitura/escrita na memória de vídeo"},
 {b:"AMI",p:"sssssssss",m:"Erro de checksum da ROM BIOS"},
 {b:"AMI",p:"l-sss",m:"Falha na memória convencional/estendida"},
 {b:"AMI",p:"l-ssssssss",m:"Falha no teste de vídeo (retrace)"},
 // Award
 {b:"Award",p:"s",m:"Sistema OK – POST concluído com sucesso"},
 {b:"Award",p:"l-ss",m:"Erro de vídeo (placa de vídeo ou monitor)"},
 {b:"Award",p:"l-sss",m:"Erro de vídeo (placa não detectada / memória de vídeo)"},
 {b:"Award",p:"C",m:"Problema de memória RAM"},
 {b:"Award",p:"hwhwhw",m:"Problema no processador (superaquecimento/falha)"},
 {b:"Award",p:"ssssssss",m:"Problema de alimentação ou placa-mãe"},
 // Phoenix
 {b:"Phoenix",p:"s-s-sss",m:"Falha de leitura/escrita no CMOS",c:"1-1-3"},
 {b:"Phoenix",p:"s-s-ssss",m:"Erro de checksum da ROM BIOS",c:"1-1-4"},
 {b:"Phoenix",p:"s-ss-s",m:"Falha no timer de intervalo",c:"1-2-1"},
 {b:"Phoenix",p:"s-s-ss",m:"Falha no teste da CPU",c:"1-1-2"},
 {b:"Phoenix",p:"s-sss-s",m:"Falha na verificação do refresh da DRAM",c:"1-3-1"},
 {b:"Phoenix",p:"ss-s-s",m:"Falha nos primeiros 64 KB de RAM – bit 0",c:"2-1-1"},
 // IBM
 {b:"IBM",p:"s",m:"POST normal – sistema OK"},
 {b:"IBM",p:"ss",m:"Erro de POST – veja o código na tela"},
 {b:"IBM",p:"C",m:"Falha na fonte de alimentação ou placa-mãe"},
 {b:"IBM",p:"ssssssss",m:"Fonte de alimentação ou placa-mãe"},
 {b:"IBM",p:"l-s",m:"Falha na placa-mãe"},
 {b:"IBM",p:"l-ss",m:"Erro na placa de vídeo (mono/CGA)"},
 {b:"IBM",p:"l-sss",m:"Erro na placa de vídeo (EGA)"},
 {b:"IBM",p:"lll",m:"Erro no teclado / placa de teclado"},
 // Compaq
 {b:"Compaq",p:"s",m:"POST normal – sistema OK"},
 {b:"Compaq",p:"ss",m:"Erro geral – veja mensagem na tela"},
 {b:"Compaq",p:"l-s",m:"Falha na placa-mãe / checksum da ROM"},
 {b:"Compaq",p:"l-ss",m:"Erro na placa de vídeo"},
];

