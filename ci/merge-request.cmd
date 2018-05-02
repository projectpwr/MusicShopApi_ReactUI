call npm install
echo "creating build"
call npm build
echo "running tests"
call set CI=true&&npm test