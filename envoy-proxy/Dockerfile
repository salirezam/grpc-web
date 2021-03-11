FROM envoyproxy/envoy-dev:b4b82411487d66290da72948b3090ad2ed605c96
COPY ./envoy-proxy/envoy.yaml /etc/envoy/envoy.yaml
EXPOSE 8080
EXPOSE 9901
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml