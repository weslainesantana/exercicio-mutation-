# Executar TODOS os testes (unit + e2e + mutation)
npm run test:all

# Executar pipeline de testes sequencial
npm run test:unit && npm run test:e2e && npm run test:mutation

# Executar em modo CI (sem interfaces visuais)
npm run test:ci
