call npm install
echo "creating build"
call npm run build
echo "running tests"
call set CI=true&&npm test a