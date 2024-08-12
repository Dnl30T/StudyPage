import json

# Função para organizar os dados em dicionário
def organizar_dados(dados):
    output = {}
    current_topic = None  # Inicializa com None para verificar se há um tópico válido
    
    for item in dados:
        item = item.strip()  # Remove espaços em branco no início e no fim da linha
        if not item:
            continue  # Pula linhas vazias
        if item[-1] == ":":  # Verifica se é um novo tópico principal
            current_topic = item[:-1]  # Remove o ":" e define o novo tópico
            output[current_topic] = []
        elif current_topic is not None:  # Garante que só adicione itens se houver um tópico válido
            output[current_topic].append(item)
    
    return output

# Lê o conteúdo do arquivo
with open('index.txt', 'r', encoding='utf-8') as file:
    linhas = file.readlines()

# Organiza os dados
conteudo = organizar_dados(linhas)

# Gera o JSON
json_output = json.dumps({"CONHECIMENTOS BÁSICOS (para todos os cargos/áreas)": conteudo}, indent=4, ensure_ascii=False)

# Imprime o JSON
print(json_output)

# Salva o JSON em um arquivo
with open('conteudo.json', 'w', encoding='utf-8') as json_file:
    json_file.write(json_output)
